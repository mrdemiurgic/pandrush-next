import React, { useState } from "react";
import {
  faCheck,
  faPlusCircle,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

import { calculateTotal } from "../../utils/pricing";

import NumberPicker from "../NumberPicker";

import * as S from "./PackageStyles";

import { Option, PackageProps } from "./types";

const Package = ({
  name,
  index = 0,
  showBookingForm = () => {},
  description,
  basePrice,
  basePriceLabel,
  features,
  options = [] as Option[],
}: PackageProps) => {
  const defaultValues = options.map((option) => option.defaultValue);

  const [selectedOptions, setSelectedOptions] =
    useState<number[]>(defaultValues);

  const total = calculateTotal(basePrice, options, selectedOptions);

  const onClick = (index: number) => {
    const newOptions = [...selectedOptions];
    newOptions[index] = selectedOptions[index] ^ 1;
    setSelectedOptions(newOptions);
  };

  const onChange = (index: number, newValue: number) => {
    const newOptions = [...selectedOptions];
    newOptions[index] = newValue;
    setSelectedOptions(newOptions);
  };

  return (
    <S.Container>
      <S.Card>
        <S.Banner>{name}</S.Banner>
        <S.Description>{description}</S.Description>
        <S.FeatureList>
          {features.map((feature) => (
            <S.FeatureItem key={feature}>
              <S.Check icon={faCheck} />
              <S.FeatureContent>{feature}</S.FeatureContent>
            </S.FeatureItem>
          ))}
        </S.FeatureList>

        <S.StartingPrice>
          <S.BaseCost>Base price</S.BaseCost>
          {basePriceLabel}
        </S.StartingPrice>
        {options.map(
          ({ name, price, type, defaultValue, showPrice }, index) => (
            <S.OptionBox
              tabIndex={type === "hourly" ? -1 : 0}
              key={name}
              $type={type}
              $selected={type === "once" && selectedOptions[index] > 0}
              onClick={
                type === "hourly"
                  ? undefined
                  : () => {
                      onClick(index);
                    }
              }
            >
              {type === "hourly" ? (
                <S.NumberPickerContainer>
                  <NumberPicker
                    min={0}
                    max={48}
                    initialValue={defaultValue}
                    onChange={(newVal) => {
                      onChange(index, newVal);
                    }}
                  />
                </S.NumberPickerContainer>
              ) : (
                <S.OptionIcon icon={faPlusCircle} />
              )}
              <S.OptionContent>
                <S.OptionName $type={type}>{name}</S.OptionName>
                <S.OptionPrice $show={showPrice}>
                  +${price}
                  {type === "hourly" && "/hr"}
                </S.OptionPrice>
              </S.OptionContent>
            </S.OptionBox>
          )
        )}
        <S.TotalBox>
          <S.TotalText>Total:</S.TotalText>
          <S.TotalPrice key={total}>${total}</S.TotalPrice>
        </S.TotalBox>
        <S.SelectContainer>
          <S.SelectButton
            onClick={() => {
              showBookingForm(index, selectedOptions);
            }}
          >
            <S.CalendarIcon icon={faCalendarAlt} />
            Book a date
          </S.SelectButton>
        </S.SelectContainer>
      </S.Card>
    </S.Container>
  );
};

export default Package;

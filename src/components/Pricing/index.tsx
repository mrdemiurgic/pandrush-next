import React, { JSX, useState } from 'react';

import { useBookingData, BookingDataProvider } from './BookingContext';

import Package from './Package';

import * as S from './styles';

import offerings from '../../content/offerings.json';

import { PricingProps, Package as PackageType } from './types';

import BookingModal from './BookingModal';

const Pricing = ({ children }: PricingProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedPackage, setSelectedPackage] = useState<PackageType>();
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  const { state } = useBookingData();

  const showBookingForm = (index: number, newSelectedOptions: number[]) => {
    setSelectedPackage(offerings.packages[index] as PackageType);
    setSelectedOptions(newSelectedOptions);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <S.Container>
      <BookingModal
        show={showModal}
        close={closeModal}
        selectedPackage={selectedPackage}
        selectedOptions={selectedOptions}
      />
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as JSX.Element, { showBookingForm, index }),
      )}
    </S.Container>
  );
};

const PricingWrapper = ({ children }: PricingProps) => (
  <BookingDataProvider>
    <Pricing>{children}</Pricing>
  </BookingDataProvider>
);

PricingWrapper.Package = Package;
export default PricingWrapper;

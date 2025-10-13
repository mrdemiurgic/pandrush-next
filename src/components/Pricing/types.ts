export interface PricingProps {
  /**
   * Package boxes
   */
  children: React.ReactNode;
}

export interface BookingModalProps {
  /**
   * Visiblity of this modal
   */
  show: boolean;
  /**
   * Close self action
   */
  close: () => void;
  /**
   * Selected package
   */
  selectedPackage: Package | undefined;
  /**
   * Selected options
   */
  selectedOptions: number[];
}

export interface Option {
  /**
   * Name of option
   */
  name: string;
  /**
   * Price of adding option
   */
  price: number;
  /**
   * One time fee or hourly
   */
  type: 'once' | 'hourly';
  /**
   * Default value
   */
  defaultValue: number;
  /**
   * Show price in Option box
   */
  showPrice: boolean;
}

export interface Package {
  /**
   * Name of Package. Example: Wedding
   */
  name: string;
  /**
   * Short description of Package
   */
  description: string;
  /**
   * The base cost of Package for calculation purpose
   */
  basePrice: number;
  /**
   * The base cost of Package for label
   */
  basePriceLabel: string;
  /**
   * The features that come with the base cost
   */
  features: string[];
  /**
   * Additional options for added cost
   */
  options?: Option[];
}

export interface PackageProps extends Package {
  /**
   * Index of this package
   */
  index?: number;
  /**
   * Create booking action
   */
  showBookingForm?: (index: number, selectedOptions: number[]) => void;
}

export interface BookFormData {
  /**
   * Desired date for booking a video project
   */
  date: Date;
  /**
   * Name of client
   */
  name: string;
  /**
   * Email of client
   */
  email: string;
  /**
   * Any additional note/comments
   */
  note: string;
}

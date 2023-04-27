import { YearForSelectType, ProductType, CountryType } from 'enums';

export type TypeGroupNameType =
  | ProductType.BEER_IN_KEGS
  | ProductType.BEER
  | ProductType.CIDER;
export type CurrentYearType = YearForSelectType.YEAR_2022 | YearForSelectType.YEAR_2023;

export type AnalyticsType = {
  ordersCount: number;
  data: {
    countByProductVolumeTotals: CountByProductVolumeTotalsType[];
    litersByTypeGroupsAndStylesTotals: LitersByTypeGroupsAndStylesTotalsType[];
    productsCountByCountryTotals: ProductsCountByCountryTotalsType;
    sumAndCountByMonthYearTotals: SumAndCountByMonthYearTotalsType[];
    sumByCountryTotals: SumByCountryTotalsType[];
  };
};

type CountByProductVolumeTotalsType = {
  year: string;
  volumes: {
    '0,5': number;
    '0,45': number;
    '20': number;
    '30': number;
  };
  months: MonthsType[];
};
type MonthsType = {
  month: string;
  volumes: {
    '0,5'?: number;
    '0,45'?: number;
    '20'?: number;
    '30'?: number;
  };
};

type LitersByTypeGroupsAndStylesTotalsType = {
  year: string;
  typeGroups: TypeGroupsType[];
};

type TypeGroupsType = {
  typeGroupId: string;
  typeGroupName: TypeGroupNameType;
  litersByStyles: {
    ['Охмеленный эль IPA/APA']?: number;
    ['Бланш/Витбир']?: number;
    ['Светлый лагер']?: number;
    ['Темный лагер']?: number;
    ['Английский эль']?: number;
    ['Фруктовый сидр']?: number;
  };
};
type ProductsCountByCountryTotalsType = {
  [YearForSelectType.YEAR_2022]: YearType;
  [YearForSelectType.YEAR_2023]: YearType;
};

type YearType = {
  year: string;
  months: MonthsProductType[];
  totalProductsCount: number;
  productsCountByCountry: {
    [CountryType.Russia]?: number;
    [CountryType.Other]?: number;
    [CountryType.Czech]?: number;
  };
};

type MonthsProductType = {
  month: string;
  productsCountByCountry: {
    [CountryType.Russia]?: number;
    [CountryType.Other]?: number;
    [CountryType.Czech]?: number;
  };
  totalProductsCount: number;
};
type SumAndCountByMonthYearTotalsType = {};
type SumByCountryTotalsType = {};

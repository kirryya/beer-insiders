export type AnalyticType = {
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

export type TypeGroupNameType = 'пиво в кегах' | 'пиво' | 'сидр';
export type CurrentYearType = '2022' | '2023';

type ProductsCountByCountryTotalsType = {
  ['2022']: YearType;
  ['2023']: YearType;
};

type YearType = {
  year: string;
  months: MonthsProductType[];
  totalProductsCount: number;
  productsCountByCountry: {
    ['Россия']?: number;
    ['']?: number;
    ['Чехия']?: number;
  };
};

type MonthsProductType = {
  month: string;
  productsCountByCountry: {
    ['Россия']?: number;
    ['']?: number;
    ['Чехия']?: number;
  };
  totalProductsCount: number;
};
type SumAndCountByMonthYearTotalsType = {};
type SumByCountryTotalsType = {};

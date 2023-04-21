export type AnalyticType = {
  ordersCount: number;
  data: {
    countByProductVolumeTotals: countByProductVolumeTotalsType[];
    litersByTypeGroupsAndStylesTotals: litersByTypeGroupsAndStylesTotalsType[];
    productsCountByCountryTotals: productsCountByCountryTotalsType[];
    sumAndCountByMonthYearTotals: sumAndCountByMonthYearTotalsType[];
    sumByCountryTotals: sumByCountryTotalsType[];
  };
};

type countByProductVolumeTotalsType = {
  year: string;
  volumes: {
    '0,5': number;
    '0,45': number;
    '20': number;
    '30': number;
  };
  months: monthsType[];
};
type monthsType = {
  month: string;
  volumes: {
    '0,5'?: number;
    '0,45'?: number;
    '20'?: number;
    '30'?: number;
  };
};

type litersByTypeGroupsAndStylesTotalsType = {
  year: string;
  typeGroups: typeGroupsType[];
};

type typeGroupsType = {
  typeGroupId: string;
  typeGroupName: 'пиво в кегах' | 'пиво' | 'сидр';
  litersByStyles: {
    ['Охмеленный эль IPA/APA']?: number;
    ['Бланш/Витбир']?: number;
    ['Светлый лагер']?: number;
    ['Темный лагер']?: number;
    ['Английский эль']?: number;
    ['Фруктовый сидр']?: number;
  };
};

type productsCountByCountryTotalsType = {};
type sumAndCountByMonthYearTotalsType = {};
type sumByCountryTotalsType = {};

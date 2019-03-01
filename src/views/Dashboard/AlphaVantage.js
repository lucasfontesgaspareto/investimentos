import { environment } from '../../env';

export function getTimeSeries(sigla, functionName = 'TIME_SERIES_DAILY') {
  const interval = '1min';
  const outputsize = 'compact';
  const url = 'https://www.alphavantage.co/query';

  return fetch(
    `${url}` +
    `?function=${functionName}` +
    `&symbol=${sigla}.SA` +
    `&interval=${interval}` +
    `&outputsize=${outputsize}` +
    `&apikey=${environment.apikey}`
  );
}

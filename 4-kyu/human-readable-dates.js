function formatDuration (seconds) {
  return [60, 3600, 86400, 31536000]
  .reduceRight(function (results, current) {
    var seconds = results.pop();
    results.push(Math.floor(seconds / current));
    results.push(seconds - results[results.length - 1] * current);
    return results;
  }, [seconds])
  .map(function (value, index) {
    return value ? value + ' ' + ['year', 'day', 'hour', 'minute', 'second'][index] + (value == 1 ? '' : 's') : 0;
  })
  .filter(Boolean)
  .join(', ')
  .replace(/,([^,]*)$/, ' and$1') || 'now';
}

import log from 'loglevel';

// TRACE 0
// DEBUG 1
// INFO 2
// WARN 3
// ERROR 4
// SILENT 5

if (process.env.NODE_ENV === 'development') {
  log.setLevel(0);
} else {
  log.setLevel(2);
}

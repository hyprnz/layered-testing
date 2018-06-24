# Layered Testing Workshop

This workshop requires [node.js](https://nodejs.org/en/download/).

Once node is installed you should be able to run 

```npm install --no-optional```

from the layered-testing directory to install required packages for running tests.

You can then run tests using

```npm run gulp tests```

You should then see an output telling you the tests have passed:

```
[18:02:59] Using gulpfile ~/github/layered-testing/gulpfile.js
[18:02:59] Starting 'clean'...
[18:02:59] Finished 'clean' after 12 ms
[18:02:59] Starting 'compile'...
[18:03:00] Finished 'compile' after 1.34 s
[18:03:00] Starting 'tests'...

  
  LegacyCalculator
    calculate
      ✓ empty
      ✓ with one date
      ✓ with many dates

  LegacyCalculator
    calculate
      ✓ empty
      ✓ with one date
      ✓ with many dates

  DateTime
    oneWeek
      ✓ one week later
    withinOneWeekFromStart
      ✓ no dates
      ✓ same date
      ✓ just after now
      ✓ exactly one week later
      ✓ more than one week later
      ✓ with many dates

  LegacyCalculator integration
    calculate
      ✓ empty
      ✓ with one date
      ✓ with many dates

  LegacyCalculator mock example
    calculate
      ✓ make

  PlannedStartMaker
    make
      ✓ empty
      ✓ with one valid date in second week
    count
      ✓ empty
      ✓ with one valid date in second week
      ✓ with one valid date in first and second week


  22 passing (24ms)
```
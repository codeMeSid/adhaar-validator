# aadhaar-validator

[![NPM Downloads][downloads-image]][downloads-url]

It is typescript enchanced version of Adhaar-validator library

This library checks whether a given number is valid Aadhaar number or Aadhaar Virtual ID, following the structure which is given by Government of India.

This library can only be used to validate the format of adhaar card number. It strictly doesnt check for authenticity of Adhaar cards.

References:

- [https://www.npci.org.in/sites/default/files/circular/Circular_No_9.pdf](https://www.npci.org.in/sites/default/files/circular/Circular_No_9.pdf)
- [Verhoeff Algorithm](https://en.wikipedia.org/wiki/Verhoeff_algorithm)
- [Aadhaar VID Circular](https://uidai.gov.in/images/resource/UIDAI_Circular_11012018.pdf)
- [UID Numbering Scheme](https://archive.org/details/Aadhaar_numbering_scheme/)

## Install 

```bash
npm install @make-sense/adhaar-validator
```

## Use

```node
import { isValid, isValidVID } from "@make-sense/adhaar-validator";
// or
// const { isValid, isValidVID } = require("@make-sense/adhaar-validator");

isValidNumber("123412341234");
// false
isValidNumber("123412341235");
// false
isValidNumber("234123412346");
// true

// Virtual ID Tests
isValidVID("2345234523436129");
// true
isValidVID("2345234523436123");
// false
isValidVID("2345234523436");
// false
```

[downloads-image]: https://img.shields.io/npm/dm/aadhaar-validator.svg
[downloads-url]: https://www.npmjs.com/package/@make-sense/adhaar-validator

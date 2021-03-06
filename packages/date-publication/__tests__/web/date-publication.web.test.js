import shared from "../shared";

const realIntl = Intl;

const londonTimezone = () => {
  global.Intl = {
    DateTimeFormat: () => ({
      resolvedOptions: () => ({ timeZone: "Europe/London" })
    })
  };
};

const nonLondonTimezone = () => {
  global.Intl = {
    DateTimeFormat: () => ({
      resolvedOptions: () => ({ timeZone: "Europe/Kiev" })
    })
  };
};

const dateBST = "2017-01-01T14:32:00.000Z";

shared(dateBST, { londonTimezone, nonLondonTimezone });

global.Intl = realIntl;

const inputData = {
  LAB_RESULTS: {
    email: true,
    sms: true,
    type: "notifications",
  },
  REFERRALS: {
    email: true,
    sms: false,
    type: "notifications",
  },
  MESSAGES: {
    email: true,
    sms: false,
    type: "notifications",
  },
  FAXES: {
    email: false,
    sms: false,
    type: "notifications",
  },
  DOCUMENTS: {
    email: false,
    sms: false,
    type: "notifications",
  },
  LAB_RESULTS_DIGEST: {
    email: true,
    type: "digests",
  },
  REFERRALS_DIGEST: {
    email: true,
    type: "digests",
  },
  MESSAGES_DIGEST: {
    email: false,
    type: "digests",
  },
  FAXES_DIGEST: {
    email: false,
    type: "digests",
  },
};

function deliveryMethods(key, data) {
  let methods = [];
  if (data[key].email) methods.push("email");
  if (data[key].sms) methods.push("sms");

  return methods;
}

// const temp = Object.entries(inputData).filter(
//   ([, { email, sms }]) => email || sms
// );
const temp = Object.entries(inputData).filter(
  ([, item]) => item.email || item.sms
);
console.log(temp);
const notifications = Object.fromEntries(
  ["notifications", "digests"].map((item) => [
    item,
    temp
      .filter(([, { type }]) => type == item)
      .map(([code]) => ({
        code,
        attributes: null,
        deleveryMethpds: deliveryMethods(code, inputData),
      })),
  ])
);

const result = { notifications };
console.log(JSON.stringify(result, null, 2));

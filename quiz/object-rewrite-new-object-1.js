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

function transformData(data) {
  const notifications = [];
  const digests = [];

  for (let key in data) {
    const currentData = data[key];
    console.log(key);
    if (
      (currentData.email || currentData.sms) &&
      currentData.type === "notifications"
    ) {
      notifications.push({
        code: key,
        attributes: null,
        deliveryMethods: deliveryMethods(key, data),
      });
    } else if (currentData.email && currentData.type === "digests") {
      digests.push({
        code: key,
        attributes: null,
        deliveryMethods: deliveryMethods(key, data),
      });
    }
  }

  return {
    notifications: {
      notifications: notifications,
      digests: digests,
    },
  };
}

const transformedData = transformData(inputData);
console.log(JSON.stringify(transformedData, null, 2));

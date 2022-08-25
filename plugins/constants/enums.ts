const API_RESPONSE = {
  SUCCESS: {
    CODE: 200,
    MESSAGE: 'Success',
  },
  ERROR: {
    CODE: 401,
    MESSAGE: '',
  },
  TOKEN_EXPIRED: {
    CODE: 401,
    MESSAGE: 'Unauthorized',
  },
};

const STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  DELETE: 'delete',
};

const DRONE_STATUS = {
  AVAILABLE: 'available',
  NOT_AVAILABLE: 'not_available',
};

const JOB_STATUS: any = {
  received: {
    name: 'Received',
    value: 'received',
  },
  accepted: {
    name: 'Accepted',
    value: 'accepted',
  },
  completed: {
    name: 'Completed',
    value: 'completed',
  },
  rejected: {
    name: 'Rejected',
    value: 'rejected',
  },
};

const JOB_STATUS_LIST = Object.keys(JOB_STATUS).map(key => JOB_STATUS[key]);

const APPROVAL_REGISTRATION_STATUS: any = {
  pending: {
    name: 'Pending',
    value: 'pending',
  },
  approved: {
    name: 'Approved',
    value: 'approved',
  },
  rejected: {
    name: 'Rejected',
    value: 'rejected',
  },
};

const APPROVAL_REGISTRATION_STATUS_LIST = Object.keys(APPROVAL_REGISTRATION_STATUS).map(key => APPROVAL_REGISTRATION_STATUS[key]);

const ORDER_STATUS: any = {
  pending: {
    name: 'Pending',
    value: 'pending',
  },
  receivedOrder: {
    name: 'Received Order',
    value: 'receivedOrder',
  },
  onDelivery: {
    name: 'On delivery',
    value: 'onDelivery',
  },
  completed: {
    name: 'Completed',
    value: 'completed',
  },
  canceled:{
    name: 'Canceled',
    value: 'canceled',
  }
};

const ORDER_STATUS_LIST = Object.keys(ORDER_STATUS).map(key => ORDER_STATUS[key]);

const ORDER_STATUS_PICKUP: any = {
  pending: {
    name: 'Pending',
    value: 'pending',
  },
  receivedOrder: {
    name: 'Received Order',
    value: 'receivedOrder',
  },
   onDelivery: {
    name: 'รอรับสินค้า',
    value: 'onDelivery',
  },
  completed: {
    name: 'Completed',
    value: 'completed',
  },
  canceled:{
    name: 'Canceled',
    value: 'canceled',
  }
};

const ORDER_STATUS_LIST_PICKUP = Object.keys(ORDER_STATUS_PICKUP).map(key => ORDER_STATUS_PICKUP[key]);

const ORDER_STATUS_ALL: any = {
  pending: {
    name: 'Pending',
    value: 'pending',
  },
  receivedOrder: {
    name: 'Received Order',
    value: 'receivedOrder',
  },
   onDelivery: {
    name: 'On delivery / รอรับสินค้า',
    value: 'onDelivery',
  },
  completed: {
    name: 'Completed',
    value: 'completed',
  },
  canceled:{
    name: 'Canceled',
    value: 'canceled',
  }
};

const ORDER_STATUS_LIST_ALL = Object.keys(ORDER_STATUS_ALL).map(key => ORDER_STATUS_ALL[key]);

const DELIVERY_TYPE: any = {
  delivery: {
    name: 'Delivery',
    value: 'delivery',
  },
  pickup: {
    name: 'Pick up',
    value: 'pickup',
  },
};

const PRODUCT_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
};

const STOCK_STATUS = {
  ON_STOCK: 'on_stock',
  OUT_OF_STOCK: 'out_of_stock',
};

const DELIVERY_TYPE_LIST = Object.keys(DELIVERY_TYPE).map(key => DELIVERY_TYPE[key]);
export const ENUM = {
  API_RESPONSE,
  STATUS,
  DRONE_STATUS,
  JOB_STATUS,
  JOB_STATUS_LIST,
  ORDER_STATUS,
  ORDER_STATUS_LIST,
  ORDER_STATUS_PICKUP,
  ORDER_STATUS_LIST_PICKUP,
  APPROVAL_REGISTRATION_STATUS,
  APPROVAL_REGISTRATION_STATUS_LIST,
  DELIVERY_TYPE,
  DELIVERY_TYPE_LIST,
  PRODUCT_STATUS,
  STOCK_STATUS,
  ORDER_STATUS_ALL,
  ORDER_STATUS_LIST_ALL
};

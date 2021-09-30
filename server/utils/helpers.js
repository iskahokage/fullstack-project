const { Op } = require("sequelize");

function supervise(func) {
  let resp = {};
  try {
    const result = func();
    return result;
    // resp.status = "success";
    // resp.data = result.data.data;
  } catch (error) {
    return error;
    // resp.status = "error";
    // resp.data = compileMessages(error.response.data.data);
  }
}

function buildQueryPagination(params) {
  let { _page: page, _limit: limit } = params;
  delete params["_page"];
  delete params["_limit"];
  page = page || 1;
  limit = limit || 3;
  const offset = page * limit - limit;

  const queryObj = { limit, offset };
  return queryObj;
}

function buildQuerySorting(params) {
  // ! TODO: can add support for multiplle sort values
  let { _sort: sortBy, _order: order } = params;
  delete params["_sort"];
  delete params["_order"];

  const queryObj = {};
  order = order || "ASC";
  if (sortBy) {
    queryObj.order = [[sortBy, order.toUpperCase()]];
  }

  return queryObj;
}

function buildQueryWhere(params) {
  const queryObj = {};

  loop1: for (const key in params) {
    const obj = {};
    const val = params[key];

    let sliceEnd = key.length;
    const operands = ["_like", "_gt", "_gte", "_lt", "_lte"];

    loop2: for (const exp of operands) {
      const regex = new RegExp(exp);
      sliceEnd = key.search(regex);

      if (sliceEnd <= 0) {
        sliceEnd = key.length;
        obj[Op.eq] = val;
      } else if (sliceEnd > 0) {
        if (exp === "_like") {
          obj[Op.iLike] = `%${val}%`;
          break loop2;
        } else if (exp === "_gt") {
          obj[Op.gt] = val;
          break loop2;
        } else if (exp === "_gte") {
          obj[Op.gte] = val;
          break loop2;
        } else if (exp === "_lt") {
          obj[Op.lt] = val;
          break loop2;
        } else if (exp === "_lte") {
          obj[Op.lte] = val;
          break loop2;
        }
      }
    }

    queryObj[key.slice(0, sliceEnd)] = obj;

    // ! Give up below method in favor of upper one, due to ability to break earlier
    // if (key.split("_like").length === 2) {
    //   obj[Op.iLike] = `%${val}%`;
    // } else if (key.split("_gt").length === 2) {
    //   obj[Op.gt] = val;
    // } else if (key.split("_gte").length === 2) {
    //   obj[Op.gte] = val;
    // } else if (key.split("_lt").length === 2) {
    //   obj[Op.lt] = val;
    // } else if (key.split("_lte").length === 2) {
    //   obj[Op.lte] = val;
    // } else {
    //   obj[Op.eq] = val;
    // }
  }

  return queryObj;
}

module.exports = {
  supervise,
  buildQueryWhere,
  buildQueryPagination,
  buildQuerySorting,
};

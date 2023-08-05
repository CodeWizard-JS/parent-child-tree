const validateId = (id) => {
  const validUuidRegex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return !(validUuidRegex.test(id) || id === null);
};

export const validateCreateData = (req, res, next) => {
  const { parent, name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({
      success: 0,
      message: "Missing required data for Create operation.",
    });
  }

  if (typeof name !== "string" || typeof age !== "number") {
    return res.status(400).json({
      success: 0,
      message: "Invalid data types for Create operation.",
    });
  }

  if (validateId(parent)) {
    return res.status(400).json({
      success: 0,
      message: "Invalid or missing parent ID.",
    });
  }
  next();
};

export const validateUpdateData = (req, res, next) => {
  const { parent, name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({
      success: 0,
      message: "Missing required data for Update operation.",
    });
  }
  if (typeof name !== "string" || typeof age !== "number") {
    return res.status(400).json({
      success: 0,
      message: "Invalid data types for Update operation.",
    });
  }
  if (validateId(parent)) {
    return res.status(400).json({
      success: 0,
      message: "Invalid or missing parent ID.",
    });
  }
  next();
};

export const validateParamId = (req, res, next) => {
  const { id } = req.params;
  if (validateId(id)) {
    return res.status(400).json({
      success: 0,
      message: "Invalid or missing ID.",
    });
  }
  next();
};

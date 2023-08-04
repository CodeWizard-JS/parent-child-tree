export const validateCreateData = (req, res, next) => {
  const { parent, name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({
      success: 0,
      message: "Missing required data for Create operation.",
    });
  }

  if (
    typeof name !== "string" ||
    typeof age !== "number" ||
    (parent === null || typeof parent !== "string")
  ) {
    return res.status(400).json({
      success: 0,
      message: "Invalid data types for Create operation.",
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
  if (
    typeof name !== "string" ||
    typeof age !== "number" ||
    (parent === null || typeof parent !== "string")
  ) {
    return res.status(400).json({
      success: 0,
      message: "Invalid data types for Update operation.",
    });
  }
  next();
};

export const validateParamId = (req, res, next) => {
  const { id } = req.params;
  const validUuidRegex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  if (!id || !validUuidRegex.test(id)) {
    return res.status(400).json({
      success: 0,
      message: "Invalid or missing ID.",
    });
  }
  next();
};

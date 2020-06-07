const tryCatch = (controller) => async (req, res) => {
  try {
    await controller(req, res);
  } catch (error) {
    return res.status(500).json({ status: 500, message: error.message });
  }
  return true;
};

export default tryCatch;

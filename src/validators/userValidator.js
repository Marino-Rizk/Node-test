// User validation middleware
// Validates user input before processing

const validateCreateUser = (req, res, next) => {
    const { name } = req.body;

    // Check if name exists and is a non-empty string
    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({
            success: false,
            message: 'Name is required and must be a non-empty string'
        });
    }

    // Check name length
    if (name.length < 2 || name.length > 100) {
        return res.status(400).json({
            success: false,
            message: 'Name must be between 2 and 100 characters'
        });
    }

    next();
};

const validateUpdateUser = (req, res, next) => {
    const { name } = req.body;

    // Allow partial updates - at least one field required
    if (!name) {
        return res.status(400).json({
            success: false,
            message: 'At least one field (name) is required'
        });
    }

    // Validate name if provided
    if (name) {
        if (typeof name !== 'string' || name.trim() === '') {
            return res.status(400).json({
                success: false,
                message: 'Name must be a non-empty string'
            });
        }

        if (name.length < 2 || name.length > 100) {
            return res.status(400).json({
                success: false,
                message: 'Name must be between 2 and 100 characters'
            });
        }
    }


    next();
};


module.exports = {
    validateCreateUser,
    validateUpdateUser
};

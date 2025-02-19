export const successResponse = (res: any, message: string, data: any = null) => {
    res.status(200).json({ success: true, message, data });
};

export const errorResponse = (res: any, message: string, statusCode = 500) => {
    res.status(statusCode).json({ success: false, message });
};

export const successResponse = (
  message: string,
  data: any = null,
  statusCode: number = 200
) => {
  return {
    success: true,
    message,
    data,
  };
};

export const errorResponse = (
  message: string,
  errors: any = null,
  statusCode: number = 500
) => {
  return {
    success: false,
    message,
    errors,
  };
};

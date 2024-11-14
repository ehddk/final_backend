import * as yup from "yup";
import type { Request, Response, NextFunction } from "express";
import HttpException from "@/api/common/exceptions/http.exception";

/** 모든 요청 validate 체크 */
export const validate =
  (
    schema:
      | yup.AnyObject
      | {
          body?: yup.AnyObject;
          path?: yup.AnyObject;
          params?: yup.AnyObject;
        }
  ) =>
  async (req: Request, __: Response, next: NextFunction) => {
    try {
      if (schema instanceof yup.ObjectSchema) {
        await schema.validate?.({
          body: req.body,
          path: req.params,
          params: req.query,
        } , { abortEarly: false }  
        );
      } else {
        await schema?.body?.validate?.(req.body);
        await schema?.path?.validate?.(req.params);
        await schema?.params?.validate?.(req.query);
      }

      return next();
    } catch (error: any) {
      if (error instanceof yup.ValidationError) {
        // ValidationError인 경우 첫 번째 에러 메시지 반환
        next(new HttpException(400, error.errors[0]));
      } else {
        next(new HttpException(400, error.message));
      }
    }
  };

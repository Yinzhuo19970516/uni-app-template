import { ResultEnum } from '@/enums/httpEnum';

declare interface RESPONSE<T = any> {
    code: ResultEnum;
    data?: T;
    message: string;
}
import { v2 } from 'cloudinary';
import * as dotenv from 'dotenv';

import { CLOUDINARY } from '../../constants';

dotenv.config();


export const CloudinaryProvider = {
   provide: CLOUDINARY,
   useFactory: () => {
      return v2.config({
         cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
         api_key: process.env.CLOUDINARY_API_KEY,
         api_secret: process.env.CLOUDINARY_API_SECRET,
      });
   },
};

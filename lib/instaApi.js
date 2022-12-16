import axios from "axios";

// const CODE =
//   "AQB8eog1eSohvvNwJzSKF_AiUhlKEDUkjrTjj7RWNnnWjG84CDx45AA6dwJKHznVI--mXIWLvMGliSoQC_Q1NI3AvFcxIQR-mxP34fslATWpT6X35IXlpZzBdGZpv4PRlz6VNjj1lDSf-GjdiWq9oHdL-aYQx3EkYrXzW_AkxQAADaIqE6vkUxX_qO_Zw97bBt83adMu7cTNmSRth-8BKAAzgbZTiNgbMIu4RQCygfcZ4Q";
// const ID = "2011951239004504";
// const SECRET = "692a3bfc2cd3eb4d621e8cbb143d86e5";
// const URI = "https://next-netlify-test.vercel.app/";
// const ACCESS =
//   "IGQVJYYmltcUZAMM1VhRjFXbjZA6dDlHSkN0V1JZASXNIdGdZAWWpOY0Job1A3azBNbGttZAFhqNTI2bW9IbGlxNDFsTEEtVGZATTzNmU3psU0JZAYWFaek51MFoyRXdlUGdQSnRfZA3c2akF3czN5VHNYZAGhra1ExUVVMUXpaMzBF";

const token =
  "IGQVJXcDFNcVRmVzhaMmRvSEtmYURwdFZAjLUxXZAEJXaTIwR09xaXFBbGVqcUNNWFowbVVINTZAYdjNYYlJYdjZAmd3VReTgxcFdQQXNibWVsRkJGUDVoLVlzcWx5VXEyZA3Y1V3dteWpn";
const postsLimit = 3;
const instagramUrl = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption&limit=${postsLimit}&access_token=${token}`;

export const fetchInstagramPosts = async () => {
  try {
    const data = await axios.get(instagramUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
};

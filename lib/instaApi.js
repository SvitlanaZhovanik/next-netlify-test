import axios from "axios";

// const CODE =
//   "AQCvAz7wxOE3sWoLGcIRc-NHw8wGWk311pt8CPb9Rvj-T70h3ene8NgPhnpgwy5su9GTJfCBLTFXlnPsiILY4zyUu1BCE-dtxNfusDV0M_Udv1HXoRJuTUMbXuNCsdmPQb2F_uVfFC0QfUWUcvFCNCwlo3exfDlufEJFi1fwNxSSg9P_4C6Ypnoq4NSdnVN7vDvZDUJG769AA3hqN0uXW4oDeym5tgVLVTPl6OqoEjoNOQ";

// const SECRET = "692a3bfc2cd3eb4d621e8cbb143d86e5";
// const URI = "https://next-netlify-test.vercel.app/";
// const ACCESS =
//   "IGQVJXcUt0akM3NWVkRXRKTDYxR21xM0wtc1YtdFRSbGVCWEpTaFNwQW9LNE9pakx1YllnWHBNV21sSTR0NDZAvR0hTYnlxeVZAhemhMY3o4enAwRnpEMFZAhMGxoV2lmazF2MXJlV0hiYXZAIcVpoZA2daWmtmaEt4TFh1VTZA3";
const postsLimit = 3;
const instagramUrl = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption&limit=${postsLimit}&access_token=${process.env.NEXT_PUBLIC_TOKEN}`;

export const fetchInstagramPosts = async () => {
  try {
    const data = await axios.get(instagramUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
};

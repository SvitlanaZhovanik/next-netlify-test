const CODE =
  "AQD5ECHeB5DMPVMtFoMEQgHcIzRDYTmp83hFIhbSAUFtl_pNrUfxYxE9nnIf6DOXYox-6M7tW4DhaWphgKPRc38dkB1VRNfVVwYRmPDSOGLSCjn8DKXy5tViCdYTTy9KMzVw2MNCh37C4IsIft16_SWWyT6oLFl3CQo0fivwi3CGd-9-emVx3TZHEb7WOk3o8Zi_2KinURf6ci2_0t1rn_4Owy_ep7KKR6_o3uC6kBQzMA";
const ID = "2011951239004504";
const SECRET = "692a3bfc2cd3eb4d621e8cbb143d86e5";
const URI = "https://next-netlify-test.vercel.app/";

export async function sendInstaUser() {
  const res = await fetch(
    `https://api.instagram.com/oauth/access_token?client_id=${ID}&client_secret=${SECRET}&grant_type=authorization_code&redirect_uri=${URI}&code=${CODE}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      mode: "no-cors",
    },
  );
  return res.json();
}

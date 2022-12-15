const CODE =
  "AQChT4CDYejaCUTNQowLEN33OdJL0jn1wI56Sdj-pcosNwVEtN64wsRHti7FkmzdmwG4n0iYNXsK12TSx00w2IyW2KIH715o2vVlXVsGQt7IHwyA0olvR1SjS38fNT-cpYOy0LrxcoYWyGSVAdTaKnJNYicKsLw4luqfJC-_LYo2qmymlxvYt47Z2kvyluDpseKnVLg483Q7uOFLRq3SLwE2tEltOfLhjXQYloTlddTzZg";
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
    },
  );
  return res.json();
}

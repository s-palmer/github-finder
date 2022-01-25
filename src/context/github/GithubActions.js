const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

 // Get users based on search
 export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });


  const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  //destructure to get items array from res returned

  const { items } = await res.json();

  return items;
};

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function OwnerSessionCheck () {
  const router = useRouter();

  useEffect(() => {
    const session = sessionStorage.getItem('Post');
   // console.log(session)
    if (session!="Owner") {
      router.push('/login');
    }
  }, []);

  return null;
};
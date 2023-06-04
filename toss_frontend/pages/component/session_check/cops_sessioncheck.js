import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function CopsSessionCheck () {
  const router = useRouter();

  useEffect(() => {
    const session = sessionStorage.getItem('Post');
   // console.log(session)
    if (session!="Cops") {
      router.push('/login');
    }
  }, []);

  return null;
};
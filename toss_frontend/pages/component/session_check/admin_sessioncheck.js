import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AdminSessionCheck () {
  const router = useRouter();

  useEffect(() => {
    const session = sessionStorage.getItem('Post');
   // console.log(session)
    if (session!="Admin") {
      router.push('/login');
    }
  }, []);

  return null;
};
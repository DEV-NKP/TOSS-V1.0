import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function OfficerSessionCheck () {
  const router = useRouter();

  useEffect(() => {
    const session = sessionStorage.getItem('Post');
   // console.log(session)
    if (session!="Officer") {
      router.push('/login');
    }
  }, []);

  return null;
};
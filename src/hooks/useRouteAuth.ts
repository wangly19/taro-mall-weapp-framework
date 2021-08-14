import { useEffect } from 'react'
import { useSelector } from 'react-redux';

export default function useRoutePermission (runtimeTesting: boolean) {

  useEffect(() => {
    if (runtimeTesting) {
      
    }
    return () => {
    }
  }, [])
}
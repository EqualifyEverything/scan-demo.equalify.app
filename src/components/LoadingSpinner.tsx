import { useEffect, useState } from 'react';
import EqualifyLogo from '../assets/equalify.svg'
import { words } from '../data/words';
import { Text } from '@radix-ui/themes'

const LoadingSpinner = () => {
    const [loadingText, setLoadingText] = useState(generateWaitText());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setLoadingText(generateWaitText());
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    function getRandomElement<T>(arr: T[]): T | undefined {
        if (arr.length === 0) {
            return undefined;
        }
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }

    function generateWaitText(){
        const text =
        getRandomElement(words[1])+" the "+
        getRandomElement(words[2])+" "+
        getRandomElement(words[3])+" "+
        getRandomElement(words[4])+" "+
        getRandomElement(words[5])+"...";
        return text;
    }
    return (
        <div className="loading-spinner-scrim">
            <img src={EqualifyLogo} className='equalify-logo' />
            <div className="loader"></div>
            <Text as="p" size="2" style={{ paddingTop: "2rem"}} className='loading-text'>{loadingText}</Text>
        </div>
    );
};

export default LoadingSpinner;
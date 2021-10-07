import Image from 'next/image';
import HeaderItem from '../components/HeaderItem';

const Header = () => {
    return (
        <header className=''>
            <div>
                <HeaderItem />
                <Image
                    className='object-contain'
                    src='https://links.papareact.com/ua6'
                    width={200}
                    height={100}
                />
            </div>
        </header>
    )
}

export default Header;

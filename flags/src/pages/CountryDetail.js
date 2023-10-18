import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCountrieDetail } from '../Services';
import './CountryDetail.css'
import DetailCard, { FolderList } from '../Components/DetailCard';


function CountryDetail(props) {

    const [detail, setDetail] = useState({})
    const {countryCode} = useParams();
    // console.log("countries Code:", countryCode);

    useEffect(() => {
        // Fetch country details when the component mounts
        const fetchCountryDetail = async () => {
            try {
                const result = await getCountrieDetail(countryCode);
                setDetail(result.data);
            } catch (error) {
                console.error('Error fetching country details:', error);
            }
        };

        fetchCountryDetail();
    }, [countryCode]);
   

    return ( 
        <div className='country-detail-wrapper'>
             <DetailCard detail={detail}/>
        </div>
     );
}

export default CountryDetail;


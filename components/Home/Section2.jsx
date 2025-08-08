


"use client";
import { car, whatsapp, cardphone, e200, g63, range, azhar, lamboEvoOne, lamboEvoTwo, lamboEvoThree, lamboEvoFour, macArturaOne, macArturaTwo, macArturaThree, macArturaFour, lamboUrusOne, lamboUrusTwo, lamboUrusThree, lamboUrusFour, G63BWOne, G63BWTwo, G63BWThree, G63BWFour, ferrari296One, ferrari296Two, ferrari296Three, ferrari296Four, escaladeOne, escaladeTwo, escaladeThree, escaladeFour, lamboUrusFive, lamboUrusSix, G63BWFive, G63BWSix, escaladeFive, escaladeSix, lamboEvoWOne, lamboEvoWTwo, lamboEvoWThree, lamboEvoWFour, rrBlueOne, rrBlueTwo, rrBlueThree, rrBlueFour, rrWhiteOne, rrWhiteTwo, rrWhiteThree, rrWhiteFour } from '@/untils/imgimport';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// c200
import { c200One, c200Two, c200Three, c200Four } from '@/untils/imgimport';
import { e200One, e200Two, e200Three, e200Four } from '@/untils/imgimport';
import { G63One, G63Two, G63Three, G63Four } from '@/untils/imgimport';
import { RangeOne, RangeTwo, RangeThree, RangeFour } from '@/untils/imgimport';
import { bentlyOne, bentlyTwo, bentlyThree, bentlyFour } from '@/untils/imgimport';
import { porsche911One } from '@/untils/imgimport';
import { main } from '@/app/data/main';
import { useLanguage } from '@/app/context/LanguageContext';

const Section2 = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNo: '',
    email: '',
    carModel: ''
  });

  const { language } = useLanguage();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modeldata, setModeldata] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [formKey, setFormKey] = useState(Date.now());

  // ✅ Proper handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (!formData.fullName || !formData.mobileNo || !formData.email) {
      setMessage(main[language]["requiredFields"]);
      setLoading(false);
      return;
    }

    const form = new FormData();
    form.append('full_name', formData.fullName);
    form.append('mobile', formData.mobileNo);
    form.append('email', formData.email);
    form.append('modal', modeldata.title);

    console.log(...form);

    try {
      const response = await axios.post("https://testqds.com/new_quicklease/api/enquiries/request_form", form);
      console.log(response);
      setMessage(main[language]["successSubmit"]);
    } catch (error) {
      console.log(error)
      console.error('Axios Error:', error);
      setMessage(main[language]["errorSubmit"]);
    }

    setFormData({ fullName: '', mobileNo: '', email: '' });
    setFormKey(Date.now());
    setLoading(false);
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
        setIsModalOpen(false)
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);



  const data = [
{
      langKey: "rrBlue",
      title: "Rolls Royce Ghost Blue",
      image: rrBlueOne,
      wicon: whatsapp,
      picon: cardphone,
      images: [
        rrBlueOne,
        rrBlueTwo,
        rrBlueThree,
        rrBlueFour
      ],
      day: "Per Day",
      week: "Per Week",
      month: "Per Month",
      dis: "AED 2700",
      dis1: "AED 15000",
      dis2: "AED 46000",
      rate1: "AED 2800",
      rate2: "AED 19000",
      rate3: "AED 74999",
    },
    {
      langKey: "rrWhite",
      title: "Rolls Royce Ghost White",
      image: rrWhiteOne,
      wicon: whatsapp,
      picon: cardphone,
      images: [
        rrWhiteOne,
        rrWhiteTwo,
        rrWhiteThree,
        rrWhiteFour
      ],
      day: "Per Day",
      week: "Per Week",
      month: "Per Month",
      dis: "AED 2700",
      dis1: "AED 15000",
      dis2: "AED 46000",
      rate1: "AED 2600",
      rate2: "AED 17500",
      rate3: "AED 72999",
    },
    {
      langKey: "lamboEvo",
      title: "Lamborghini EVO Spyder Blue 2023",
      image: lamboEvoOne,
      wicon: whatsapp,
      picon: cardphone,
      images: [
        lamboEvoOne,
        lamboEvoWTwo,
        lamboEvoThree,
        lamboEvoFour
      ],
      day: "Per Day",
      week: "Per Week",
      month: "Per Month",
      dis: "AED 2700",
      dis1: "AED 15000",
      dis2: "AED 46000",
      rate1: "AED 3300",
      rate2: "AED 21800",
      rate3: "AED 62999",
    },
    {
      langKey: "lamboEvoW",
      title: "Lamborghini EVO Spyder White 2023",
      image: lamboEvoWOne,
      wicon: whatsapp,
      picon: cardphone,
      images: [
        lamboEvoWOne,
        lamboEvoWTwo,
        lamboEvoWThree,
        lamboEvoWFour
      ],
      day: "Per Day",
      week: "Per Week",
      month: "Per Month",
      dis: "AED 2700",
      dis1: "AED 15000",
      dis2: "AED 46000",
      rate1: "AED 3100",
      rate2: "AED 20500",
      rate3: "AED 59999",
    },
    {
      langKey: "macSpyder",
      title: "McLaren Artura Spyder Orange 2025",
      image: macArturaOne,
      wicon: whatsapp,
      picon: cardphone,
      images: [
        macArturaOne,
        macArturaTwo,
        macArturaThree,
        macArturaFour
      ],
      day: "Per Day",
      week: "Per Week",
      month: "Per Month",
      dis: "AED 2700",
      dis1: "AED 15000",
      dis2: "AED 46000",
      rate1: "AED 3000",
      rate2: "AED 20500",
      rate3: "AED 57999",
    },
    {
      langKey: "lamboUrusYellow",
      title: "Lamborghini Urus Yellow 2024",
      image: lamboUrusThree,
      wicon: whatsapp,
      picon: cardphone,
      images: [
        lamboUrusThree,
        lamboUrusFour,
        lamboUrusFive,
        lamboUrusSix
      ],
      day: "Per Day",
      week: "Per Week",
      month: "Per Month",
      dis: "AED 2700",
      dis1: "AED 15000",
      dis2: "AED 46000",
      rate1: "AED 2600",
      rate2: "AED 17500",
      rate3: "AED 55999",
    },
    {
      langKey: "lamboUrusPurple",
      title: "Lamborghini Urus Purple 2024",
      image: lamboUrusTwo,
      wicon: whatsapp,
      picon: cardphone,
      images: [
	lamboUrusTwo,
        lamboUrusOne,
        lamboUrusFive,
        lamboUrusSix
      ],
      day: "Per Day",
      week: "Per Week",
      month: "Per Month",
      dis: "AED 2700",
      dis1: "AED 15000",
      dis2: "AED 46000",
      rate1: "AED 2600",
      rate2: "AED 17500",
      rate3: "AED 55999",
    },
    {
      langKey: "merG63Black",
      title: "Mercedes G63 Black 2024",
      image: G63BWOne,
      wicon: whatsapp,
      picon: cardphone,
      images: [
        G63BWOne,
        G63BWSix,
        G63BWThree,
        G63BWFour
      ],
      day: "Per Day",
      week: "Per Week",
      month: "Per Month",
      dis: "AED 2700",
      dis1: "AED 15000",
      dis2: "AED 46000",
      rate1: "AED 1500",
      rate2: "AED 10000",
      rate3: "AED 37999",
    },
    {
      langKey: "merG63Brown",
      title: "Mercedes G63 Brown 2024",
      image: G63BWFive,
      wicon: whatsapp,
      picon: cardphone,
      images: [
        G63BWFive,
        G63BWTwo,
        G63BWThree,
        G63BWFour
      ],
      day: "Per Day",
      week: "Per Week",
      month: "Per Month",
      dis: "AED 2700",
      dis1: "AED 15000",
      dis2: "AED 46000",
      rate1: "AED 1400",
      rate2: "AED 9000",
      rate3: "AED 35999",
    },
    {
      langKey: "ferrari296",
      title: "Ferrari 296 GTB Red",
      image: ferrari296One,
      wicon: whatsapp,
      picon: cardphone,
      images: [
        ferrari296One,
        ferrari296Two,
        ferrari296Three,
        ferrari296Four
      ],
      day: "Per Day",
      week: "Per Week",
      month: "Per Month",
      dis: "AED 2700",
      dis1: "AED 15000",
      dis2: "AED 46000",
      rate1: "AED 3300",
      rate2: "AED 22500",
      rate3: "AED 62999",
    },
    {
      langKey: "escaladeBlack",
      title: "Escalade Black 2024",
      image: escaladeThree,
      wicon: whatsapp,
      picon: cardphone,
      images: [
        escaladeThree,
        escaladeFour,
        escaladeFive,
        escaladeSix
      ],
      day: "Per Day",
      week: "Per Week",
      month: "Per Month",
      dis: "AED 2700",
      dis1: "AED 15000",
      dis2: "AED 46000",
      rate1: "AED 1200",
      rate2: "AED 7700",
      rate3: "AED 25999",
    },
    {
      langKey: "escaladeWhite",
      title: "Escalade White 2024",
      image: escaladeOne,
      wicon: whatsapp,
      picon: cardphone,
      images: [
        escaladeOne,
        escaladeTwo,
        escaladeFive,
        escaladeSix
      ],
      day: "Per Day",
      week: "Per Week",
      month: "Per Month",
      dis: "AED 2700",
      dis1: "AED 15000",
      dis2: "AED 46000",
      rate1: "AED 1100",
      rate2: "AED 7000",
      rate3: "AED 24999",
    },
    {
      langKey: "mercedesBenzC200",
      title: "Mercedes Benz C200 2025",
      image: c200One,
      wicon: whatsapp,
      picon: cardphone,
      images: [
        c200One,
        c200Two,
        c200Three,
        c200Four
      ],
      day: "Per Day",
      week: "Per Week",
      month: "Per Month",
      dis: "AED 800",
      dis1: "AED 3700",
      dis2: "AED 15000",
      rate1: "AED 400",
      rate2: "AED 2450",
      rate3: "AED 9999",
    },
    {
      langKey: "mercedesBenzE200",
      title: "Mercedes E200 2025",
      image: e200One,
      wicon: whatsapp,
      picon: cardphone,
      images: [
        e200One,
        e200Two,
        e200Three,
        e200Four
      ],
      day: "Per Day",
      week: "Per Week",
      month: "Per Month",
      dis: "AED 700",
      dis1: "AED 3700",
      dis2: "AED 15000",
      rate1: "AED 450",
      rate2: "AED 3000",
      rate3: "AED 10999",
    },
    {
      langKey: "mercedezBenzG63",
      title: "Mercedes G63 2025",
      image: G63One,
      wicon: whatsapp,
      picon: cardphone,
      images: [
        G63One,
        G63Two,
        G63Three,
        G63Four
      ],
      day: "Per Day",
      week: "Per Week",
      month: "Per Month",
      dis: "AED 2700",
      dis1: "AED 16000",
      dis2: "AED 46000",
      rate1: "AED 1700",
      rate2: "AED 11200",
      rate3: "AED 39999",
    },
    {
      langKey: "rangeRoverVogue",
      title: "Range Rover Vogue 2025",
      image: RangeOne,
      wicon: whatsapp,
      picon: cardphone,
      images: [
        RangeOne,
        RangeTwo,
        RangeThree,
        RangeFour
      ],
      day: "Per Day",
      week: "Per Week",
      month: "Per Month",
      dis: "AED 2700",
      dis1: "AED 15000",
      dis2: "AED 46000",
      rate1: "AED 1300",
      rate2: "AED 8500",
      rate3: "AED 29999",
    },
    {
      langKey: "bentleyBentayga",
      title: "Bentley Bentayga S V8",
      image: bentlyOne,
      wicon: whatsapp,
      picon: cardphone,
      images: [
        bentlyOne,
        bentlyTwo,
        bentlyThree,
        bentlyFour
      ],
      day: "Per Day",
      week: "Per Week",
      month: "Per Month",
      dis: "AED 2700",
      dis1: "AED 15000",
      dis2: "AED 46000",
      rate1: "AED 1900",
      rate2: "AED 12600",
      rate3: "AED 42999",
    },
    {
      langKey: "porsche911carrera",
      title: "Porsche 911 carrera",
      image: porsche911One,
      wicon: whatsapp,
      picon: cardphone,
      images: [
        porsche911One,
        porsche911One,
        porsche911One,
        porsche911One
      ],
      day: "Per Day",
      week: "Per Week",
      month: "Per Month",
      dis: "AED 2700",
      dis1: "AED 15000",
      dis2: "AED 46000",
      rate1: "AED 1350",
      rate2: "AED 9000",
      rate3: "AED 32500",
    }
  ];

  const handleModelOpen = (item) => {
    setIsModalOpen(true);
    setModeldata(item);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>

    </>
  );
};

export default Section2;

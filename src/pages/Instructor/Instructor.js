import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Styled.Instructor';

const Instructor = () => {
  const [instructorList, setInstructorList] = useState();

  useEffect(() => {
    const getInstructor = async () => {
      const gets = await axios('http://10.58.4.122:3000/instructors');
      setInstructorList(gets.data.instructors);
    };
    getInstructor();
  }, []);
  return (
    <>
      <S.InstructorTitle>INSTRUCTORS</S.InstructorTitle>
      <S.SubTitle>안무가</S.SubTitle>
      <S.InstructorFlex>
        {instructorList?.map(({ id, profile_image_url, name_en }) => (
          <Link to={`/instructorDetail/${id}`} key={id}>
            <S.Square>
              <S.ImgBox color={id}>
                <S.Img src={profile_image_url} alt={name_en} />
              </S.ImgBox>
              <S.TestBox>
                <S.TestLine>{name_en}</S.TestLine>
                <S.TestNoLine />
                <S.TestLine>→</S.TestLine>
              </S.TestBox>
            </S.Square>
          </Link>
        ))}
      </S.InstructorFlex>
    </>
  );
};
export default Instructor;

/* eslint-disable no-extra-semi */
import React, { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { api } from '../../services/api'
import ProfCard from '../../components/ProfCard'
import Background from '../../components/Background'
import * as S from './styled'

const ProfilePage = () => {
  const { auth } = useAuth()
  const [profiles, setProfiles] = useState([])

  const img_link =
    'https://images.unsplash.com/photo-1601587414041-61035996db8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  const blurN = 5

  useEffect(() => {
    const getProfiles = async () => {
      const token = localStorage.getItem('token')
      const config = {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
      try {
        const { data } = await api.get('/profiles', config)
        setProfiles(data)
      } catch (error) {
        console.error(error)
      }
    }
    if (auth.role !== 'admin') {
      alert('Not authorized!')
    }
    getProfiles()
  }, [auth])

  return (
    <S.Profile>
      <Background imgUrl={img_link} blur={blurN} />
      <h1>List Profiles</h1>
      {profiles &&
        profiles?.map((profile) => (
          <ProfCard key={profile._id} profile={profile}>
            {profile.username}
          </ProfCard>
        ))}
    </S.Profile>
  )
}

export default ProfilePage

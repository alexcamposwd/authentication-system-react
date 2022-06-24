/* eslint-disable no-extra-semi */
import React, { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { api } from '../../services/api'
import ProfCard from '../../components/ProfCard'
import * as S from './styled'

const ProfilePage = () => {
  const { auth } = useAuth()
  const [profiles, setProfiles] = useState([])

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

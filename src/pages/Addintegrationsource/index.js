import React from 'react'
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'

// ** Third Party Imports
import * as yup from 'yup'
import toast from 'react-hot-toast'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import { useNavigate } from "react-router-dom";

const defaultValues = {
    credentialjson:'',
  connectionName: '',
  dataSource:'',
  defaultdatasetid:'',
  projectid:'',
  tableid:''
}

const showErrors = (field, valueLen, min) => {
  if (valueLen === 0) {
    return `${field} field is required`
  } else if (valueLen > 0 && valueLen < min) {
    return `${field} must be at least ${min} characters`
  } else {
    return ''
  }
}

const schema = yup.object().shape({
    credentialjson: yup
    .string()
    .min(3, obj => showErrors('credentialjson', obj.value.length, obj.min))
    .required(),
  dataSource: yup
    .string()
    .min(3, obj => showErrors('dataSource', obj.value.length, obj.min))
    .required(),
    defaultdatasetid: yup
    .string()
    .min(3, obj => showErrors('defaultdatasetid', obj.value.length, obj.min))
    .required(),
    connectionName: yup
    .string()
    .min(3, obj => showErrors('connectionName', obj.value.length, obj.min))
    .required(),
    projectid: yup
    .string()
    .min(3, obj => showErrors('projectid', obj.value.length, obj.min))
    .required(),
    tableid: yup
    .string()
    .min(3, obj => showErrors('tableid', obj.value.length, obj.min))
    .required()
})


function Addintegrationsource() {
    // const [state, setState] = useState({
    //     password: '',
    //     showPassword: false
    //   })
    
      // ** Hook
      const navigate = useNavigate();
      const {
        control,
        handleSubmit,
        formState: { errors }
      } = useForm({
        defaultValues,
        mode: 'onChange',
        resolver: yupResolver(schema)
      })
    
    //   const handleClickShowPassword = () => {
    //     setState({ ...state, showPassword: !state.showPassword })
    //   }
    
    //   const handleMouseDownPassword = event => {
    //     event.preventDefault()
    //   }
      const onSubmit = () => toast.success('Form Submitted')
  return (
    <Card>
    <CardContent>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Controller
                name='connectionName'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    value={value}
                    label='Connection Name'
                    onChange={onChange}
                    placeholder='Leonard'
                    error={Boolean(errors.connectionName)}
                    aria-describedby='validation-schema-first-name'
                  />
                )}
              />
              {errors.connectionName && (
                <FormHelperText sx={{ color: 'error.main' }} id='validation-schema-first-name'>
                  {errors.connectionName.message}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <Controller
                name='dataSource'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    value={value}
                    label='Data Source'
                    onChange={onChange}
                    placeholder='Carter'
                    error={Boolean(errors.dataSource)}
                    aria-describedby='validation-schema-dataSource'
                  />
                )}
              />
              {errors.dataSource && (
                <FormHelperText sx={{ color: 'error.main' }} id='validation-schema-dataSource'>
                  {errors.dataSource.message}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12}>
          <FormControl fullWidth>
              <Controller
                name='credentialjson'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    value={value}
                    label='Credential JSON'
                    onChange={onChange}
                    placeholder='Carter'
                    error={Boolean(errors.credentialjson)}
                    aria-describedby='validation-schema-credentialjson'
                  />
                )}
              />
              {errors.credentialjson && (
                <FormHelperText sx={{ color: 'error.main' }} id='validation-schema-credentialjson'>
                  {errors.credentialjson.message}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12}>
          <FormControl fullWidth>
              <Controller
                name='defaultdatasetid'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    value={value}
                    label='Default Dataset ID'
                    onChange={onChange}
                    placeholder='Carter'
                    error={Boolean(errors.defaultdatasetid)}
                    aria-describedby='validation-schema-defaultdatasetid'
                  />
                )}
              />
              {errors.defaultdatasetid && (
                <FormHelperText sx={{ color: 'error.main' }} id='validation-schema-defaultdatasetid'>
                  {errors.defaultdatasetid.message}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
          <FormControl fullWidth>
              <Controller
                name='projectid'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    value={value}
                    label='Project ID'
                    onChange={onChange}
                    placeholder='Carter'
                    error={Boolean(errors.projectid)}
                    aria-describedby='validation-schema-projectid'
                  />
                )}
              />
              {errors.projectid && (
                <FormHelperText sx={{ color: 'error.main' }} id='validation-schema-projectid'>
                  {errors.projectid.message}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
          <FormControl fullWidth>
              <Controller
                name='tableid'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    value={value}
                    label='Table ID'
                    onChange={onChange}
                    placeholder='Carter'
                    error={Boolean(errors.tableid)}
                    aria-describedby='validation-schema-tableid'
                  />
                )}
              />
              {errors.tableid && (
                <FormHelperText sx={{ color: 'error.main' }} id='validation-schema-tableid'>
                  {errors.tableid.message}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button size='large' type='submit' variant='contained'>
              Submit
            </Button>
            <Button size='large' type='submit' variant='contained' sx={{ml:"2%"}}>
           Back
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  </Card>
  )
}

export default Addintegrationsource
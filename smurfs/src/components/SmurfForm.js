import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { onNameInputChange, onAgeInputChange, onHeightInputChange, postSmurf } from '../store/actions';

const SmurfForm = ({ values, disabled, onNameInputChange, onAgeInputChange, onHeightInputChange, postSmurf }) => {
    // const {
    //     values,
    //     // onInputChange,
    //     // onSubmit,
    //     disabled
    // } = props

    // useEffect(() => {
    //     postSmurf();
    // }, [postSmurf]);
    const onSubmit = evt => {
        evt.preventDefault()
    
        postSmurf(values)
      }

    return (
        <form className='form'
        //  onSubmit={onSubmit}
         >
            <h2>New Smurf Form</h2>

            
            {/* ///////////// TEXT INPUTS /////////////// */}
            {values && 
                <>
                    <label>Name&nbsp;&nbsp;&nbsp;
                    <input 
                        data-cy_name_input='cy_name_input'
                        value={values.name}
                        placeholder={`Smurf's name...`}
                        onChange={onNameInputChange}
                        name='name'
                        type='text'
                    />
                    </label>
                    <label>Age&nbsp;&nbsp;&nbsp;
                        <input 
                            data-cy_age_input='cy_age_input'
                            value={values.age}
                            placeholder={`Smurf's age...`}
                            onChange={onAgeInputChange}
                            name='age'
                            type='number'
                        />
                    </label>
                    <label>Height&nbsp;&nbsp;&nbsp;
                        <input 
                            data-cy_height_input='cy_height_input'
                            value={values.height}
                            placeholder={`Smurf's height...`}
                            onChange={onHeightInputChange}
                            name='height'
                            type='text'
                        />
                    </label>
                    <button data-cy_submit='cy_submit' 
                    onClick={onSubmit} 
                    disabled={disabled}>SUBMIT</button>
                </>
            }
            
        </form>
    )
}

const mapStateToProps = state => {
    console.log('SmurfForm.js mSTP is running...', state);
    console.log(state.formValues)

    return {
        values: state.formValues,
        disabled: state.disabled
    };
};

export default connect(mapStateToProps, { onNameInputChange, onAgeInputChange, onHeightInputChange, postSmurf })(SmurfForm);
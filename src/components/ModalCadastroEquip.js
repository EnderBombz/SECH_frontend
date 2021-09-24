import React from 'react'
import * as MaterialUi from '@material-ui/core'
import * as MaterialUiIcons from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import '../css/modal.css'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export const ModalCadastroEquip = ({ ModalCadastroVisible, setModalCadastroVisible }) => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>{ModalCadastroVisible ?
            <div className='modal-background'>
                <div className='modal-container'>

                    <div className='modal-header'>
                        <h2>Cadastro de equipamento</h2>
                        <MaterialUi.Button onClick={() => setModalCadastroVisible(prev => !prev)}>
                            <MaterialUiIcons.Close />
                        </MaterialUi.Button>
                    </div>

                    <div className='modal-form'>
                        <form>
                            <div className="box-text">
                                <MaterialUi.TextField
                                    type="number"
                                    label="Id"
                                    InputProps={{
                                        startAdornment: (
                                            <MaterialUi.InputAdornment position="start" />
                                        ),
                                    }}
                                />
                            </div>

                            <MaterialUi.FormControl className={classes.formControl}>
                                <MaterialUi.InputLabel>Tipo</MaterialUi.InputLabel>
                                <MaterialUi.Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    onChange={handleChange}
                                >
                                    <MaterialUi.MenuItem value={10}>Notebook</MaterialUi.MenuItem>
                                    <MaterialUi.MenuItem value={20}>Mouse</MaterialUi.MenuItem>
                                    <MaterialUi.MenuItem value={30}>Hedset</MaterialUi.MenuItem>
                                </MaterialUi.Select>
                            </MaterialUi.FormControl>
                            <div className="box-text">
                                <MaterialUi.TextField
                                    type="Text"
                                    label="Fornecedor"
                                    InputProps={{
                                        startAdornment: (
                                            <MaterialUi.InputAdornment position="start" />
                                        ),
                                    }}
                                />
                            </div>
                            <div className="box-text">
                                <MaterialUi.TextField
                                    type="Text"
                                    label="Especificações"
                                    InputProps={{
                                        startAdornment: (
                                            <MaterialUi.InputAdornment position="start" />
                                        ),
                                    }}
                                />
                            </div>
                            <div className="box-text">
                                <MaterialUi.TextField
                                    type="Text"
                                    label="Descrição"
                                    InputProps={{
                                        startAdornment: (
                                            <MaterialUi.InputAdornment position="start" />
                                        ),
                                    }}
                                />
                            </div>
                        </form>
                        <div className='modal-footer'>
                            <div className="send-request-button">
                                <MaterialUi.Button variant="contained" color="primary">cadastrar</MaterialUi.Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : null}
        </>
    )
}
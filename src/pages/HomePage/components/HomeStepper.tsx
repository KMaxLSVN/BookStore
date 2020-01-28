import React, { FC, useState } from 'react';
import styles from '../HomePage.module.scss';
// material
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { connect } from 'react-redux';
import { State } from '../../../redux/reducers';
import { IUser } from '../../../shared/models/user.model';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
		},
		backButton: {
			marginRight: theme.spacing(1),
		},
		instructions: {
			marginTop: theme.spacing(1),
			marginBottom: theme.spacing(1),
		},
		link: {
				margin: theme.spacing(1),
			},
	}),
);

type Props = {
	userInfo?: IUser
}

const HomeStepper: FC<Props> = (props) => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = useState(0);
	const steps = getSteps();

	function getSteps(): string[] {
		return ['Find & Choose a book', 'Login or register yourself', 'Buy in one click!'];
	}

	function getStepContent(stepIndex: number, classes: any): JSX.Element | "Uknown stepIndex" {
			switch (stepIndex) {
				case 0:
					return (
							<span className={styles.stepperContent}>
									<span>                  
										<Link href={'#'} className={classes.link}>
												The largest selection of books in the world
										</Link>
									</span>
							</span>
					);
				case 1:
					return (
							<span className={styles.stepperContent+' '+styles.userNav}>
										<span>
												We are glad to welcome our
												<Link href={'#'}> users </Link>
												!
										</span>
										<span>
												<Link href={'#'}> Not registered? </Link>
												What are you waiting for?
										</span>
							</span>
					);
				case 2:
					return (
							<span className={styles.stepperContent}>
									<span>
											<Link>Check your cart</Link>
									</span>
							</span>
					);
				default:
					return 'Uknown stepIndex';
			}
		}

	function handleNext(): void {
		setActiveStep(prevActiveStep => prevActiveStep + 1); 
	}

	function handleBack(): void {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	}

	function handleReset(): void {
		setActiveStep(0);
	}

	return (
		<div className={classes.root}>
			<Stepper activeStep={activeStep} alternativeLabel>
				{steps.map(label => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			<div>
				{activeStep === steps.length ? (
					<div>
						<Typography className={classes.instructions}>All steps completed</Typography>
						<Button onClick={handleReset}>Reset</Button>
					</div>
				) : (
					<div>
						<Typography className={classes.instructions}>{getStepContent(activeStep, classes)}</Typography>
						<div>
							<Button
								disabled={activeStep === 0}
								onClick={handleBack}
								className={classes.backButton}
							>
								Back
							</Button>
							<Button variant="contained" color="primary" onClick={handleNext}>
								{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
							</Button>
							<input
								type="text"
								value={props.userInfo!.jwt}
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

const mapStateToProps = (state: State) => ({
	userInfo: state.AuthenticateReducer.userInfo
})

// const mapDispatchToProps = (dispatch) => {
// 	return {
		
// 	}
// }

export default connect(mapStateToProps, null)(HomeStepper);
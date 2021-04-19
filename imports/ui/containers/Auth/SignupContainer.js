import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux-meteor';
import { push } from 'react-router-redux';
import SignupComp from '../../components/Auth/SignupComp';

const mapTrackerToProps = (state, props) => {
  return {
  };
};

function mapStateToProps(state) {
  let introducerInfoStr = `${state.IntroducerInfo.firstName} ${state.IntroducerInfo.lastName}`;
  introducerInfoStr += state.IntroducerInfo.clcNo ? ` (${state.IntroducerInfo.clcNo})` : '';
  return {
    //TODO Fix the introducer fields to be correct again.
    // introducerInfoStr: (introducerInfoStr.trim().length !== 0) ? introducerInfoStr : null,
    // introducerId: state.IntroducerInfo._id,
    introducerInfoStr: "DUMMY",
    introducerId: "123456789123456789123456789",
    email: state.SignupInfo.email,
    username: state.SignupInfo.username,
    firstName: state.SignupInfo.firstName,
    lastName: state.SignupInfo.lastName,
    cellNo: state.SignupInfo.cellNo,
    //TODO Fix the walletAddress field to be correct again.
    //walletAddress: state.SignupInfo.walletAddress,
    walletAddress: "987654321234567898765432123456789"
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveSignupInfoState: signupInfo => dispatch({ type: 'SAVE_SIGNUP_INFO', signupInfo }),
    saveIntroducerInfoState: introducerInfo => dispatch({ type: 'SAVE_INTRODUCER_INFO', introducerInfo }),
  };
}

export default connect(mapTrackerToProps, mapStateToProps, mapDispatchToProps)(SignupComp);

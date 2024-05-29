import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import UploadInformation from './UploadInformation';
import DescriptionInformation from './DescriptionInformation';
import OptionInformationContent2 from './OptionInformationContent2';
import SMTPRelay from './SMTPRelay';

const Content2 = () => {

    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return <UploadInformation />;
            case 2:
                return <DescriptionInformation />;
            case 3:
                return <OptionInformationContent2 />;
            case 4:
                return <SMTPRelay />;
            default:
                return null;
        }
    };

    return (
        <View style={{ marginTop: 20, alignItems: 'center', backgroundColor: '#fafafa', padding: 16, borderRadius: 10 }}>
            {renderStepContent()}

            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 30 }}>
                {step !== 1 && (
                    <TouchableOpacity onPress={handleBack} style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, backgroundColor: '#c7c7c7', borderRadius: 10, padding: 8, width: 100 }}>
                        <Text style={{ color: '#fff', fontSize: 16 }}>Back</Text>
                    </TouchableOpacity>
                )}

                {step !== 4 && (
                    <TouchableOpacity onPress={handleNext} style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, backgroundColor: '#007bff', borderRadius: 10, padding: 8, width: 100 }}>
                        <Text style={{ color: '#fff', fontSize: 16 }}>Next</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default Content2;

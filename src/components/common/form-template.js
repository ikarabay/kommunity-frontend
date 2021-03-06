import React from 'react';
import PropTypes from 'prop-types';
import { Title, Paragraph, Button } from '../ui';

const FormTemplate = props => {
  const {
    additionalProps,
    title,
    subTitle,
    Form,
    children,
    onClose,
    redirect,
    redirectLabel,
    redirectAction,
  } = props;
  return (
    <React.Fragment>
      <div className="px-12 text-center">
        <Title type="h5" extraClassName="font-extrabold mb-2">
          {title}
        </Title>
        <Paragraph extraClassName="text-gunmetal mb-10">{subTitle}</Paragraph>
        <Form onClose={onClose} {...additionalProps} />
      </div>
      {children} {/* what if we want something after form? yes, we can use children for that. */}
      {redirect && (
        <Paragraph extraClassName="mt-10 p-1 bg-paleGrey text-blueyGrey rounded-4">
          {redirect}
          <Button
            extraClassName="font-medium text-base pl-2 pr-2"
            size="small"
            styleType="plain"
            label={redirectLabel}
            onClick={redirectAction}
          />
        </Paragraph>
      )}
    </React.Fragment>
  );
};

FormTemplate.propTypes = {
  Form: PropTypes.func,
  additionalProps: PropTypes.object,
  children: PropTypes.node,
  onClose: PropTypes.func,
  redirect: PropTypes.string,
  redirectAction: PropTypes.func,
  redirectLabel: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string,
};

export default FormTemplate;

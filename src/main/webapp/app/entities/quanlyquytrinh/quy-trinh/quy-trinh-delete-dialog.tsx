import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IQuyTrinh } from 'app/shared/model/quanlyquytrinh/quy-trinh.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './quy-trinh.reducer';

export interface IQuyTrinhDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class QuyTrinhDeleteDialog extends React.Component<IQuyTrinhDeleteDialogProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  confirmDelete = event => {
    this.props.deleteEntity(this.props.quyTrinhEntity.id);
    this.handleClose(event);
  };

  handleClose = event => {
    event.stopPropagation();
    this.props.history.goBack();
  };

  render() {
    const { quyTrinhEntity } = this.props;
    return (
      <Modal isOpen toggle={this.handleClose}>
        <ModalHeader toggle={this.handleClose}>
          <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
        </ModalHeader>
        <ModalBody id="gatewayApp.quanlyquytrinhQuyTrinh.delete.question">
          <Translate contentKey="gatewayApp.quanlyquytrinhQuyTrinh.delete.question" interpolate={{ id: quyTrinhEntity.id }}>
            Are you sure you want to delete this QuyTrinh?
          </Translate>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.handleClose}>
            <FontAwesomeIcon icon="ban" />
            &nbsp;
            <Translate contentKey="entity.action.cancel">Cancel</Translate>
          </Button>
          <Button id="jhi-confirm-delete-quyTrinh" color="danger" onClick={this.confirmDelete}>
            <FontAwesomeIcon icon="trash" />
            &nbsp;
            <Translate contentKey="entity.action.delete">Delete</Translate>
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = ({ quyTrinh }: IRootState) => ({
  quyTrinhEntity: quyTrinh.entity
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuyTrinhDeleteDialog);

import React from 'react';
import ProgressBar from './/ProgressBar';

interface Props {
  userAddress: string|null;
  totalSupply: number;
  maxSupply: number;
  isPaused: boolean;
  isWhitelistMintEnabled: boolean;
  isUserInWhitelist: boolean;
  isSoldOut: boolean;
}

interface State {
}

const defaultState: State = {
};

export default class CollectionStatus extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  private isSaleOpen(): boolean
  {
    return (this.props.isWhitelistMintEnabled || !this.props.isPaused) && !this.props.isSoldOut;
  }

  render() {
    return (
      <>
        <div className="collection-status">
             

       
          <div className="user-address">
            <span className="label pb-2">Progress:</span>
            {this.props.totalSupply}/{this.props.maxSupply}
            <ProgressBar progressPercentage={this.props.totalSupply / this.props.maxSupply * 100} />

          </div>
        </div>
      </>
    );
  }
}

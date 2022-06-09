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
             
          <div className="supply">
            <span className="label">Supply</span>
            {this.props.totalSupply}/{this.props.maxSupply}
          </div>

          <div className="current-sale">
            <span className="label">Sale </span>
            Free Mint :)
            
          </div>
          <div className="user-address">
            <span className="label">Progress:</span>
            <ProgressBar progressPercentage={this.props.totalSupply / this.props.maxSupply * 100} />

          </div>
        </div>
      </>
    );
  }
}

/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only.  Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import TodoList from './TodoList';
import TodoTextInput from './TodoTextInput';

import React from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';

class TodoApp extends React.Component {
  _handleTextInputSave = (text) => {
    console.log(`TodoApp: _handleTextInputSave: ${text}`);
  };

  render() {
    return (
      <div>
        <h1>Entities</h1>
        <div>user id: {this.props.viewer.id}</div>
        <section className="todoapp">
          <TodoTextInput
            className="new-entity"
            placeholder="what's the entity name?"
            onSave={this._handleTextInputSave}
          />
          <TodoList viewer={this.props.viewer} />
        </section>
        <div>You have {this.props.viewer.totalCount} entities.</div>
      </div>
    );
  }
}

export default createFragmentContainer(TodoApp, {
  viewer: graphql`
    fragment TodoApp_viewer on User {
      ...TodoList_viewer,
      totalCount
      id
    }
  `,
});

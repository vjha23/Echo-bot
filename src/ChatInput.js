import React from "react";

function ChatInput({ message, handleChange, handleClick }) {
  return (
    <div className="bottom_wrapper">
      <div className="message_input_wrapper">
        <input
          id="msg_input"
          className="message_input"
          placeholder="May I help you?"
          type="text"
          value={message}
          onChange={handleChange}
        />
      </div>
      <div className='send_message'>
            <div className='text'>
            <img
            className="send-button"
            onClick={handleClick}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE0MDZBMDc5MEZCRjExRUI4QTI3RjYwRDY0QzUwRkMyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE0MDZBMDdBMEZCRjExRUI4QTI3RjYwRDY0QzUwRkMyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTQwNkEwNzcwRkJGMTFFQjhBMjdGNjBENjRDNTBGQzIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTQwNkEwNzgwRkJGMTFFQjhBMjdGNjBENjRDNTBGQzIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4aWhCHAAAAX0lEQVR42pyTUQrAIAxD25D7n2B41e6ngw1mbRMQsfIeYtWvtcLM3IQg58ghwaZIsKm3JDjslxI0T/grwfCOPhIe2hRVnUqLMs4p8F5Qgbpw+WypQDt49EGoQE9uAQYA628R//MjIioAAAAASUVORK5CYII="
            alt="send-button"
          />
            </div>
      </div>
    </div>
  );
}

export default ChatInput;

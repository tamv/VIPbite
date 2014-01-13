class MobileController < ApplicationController
	#Function_Name:
	#Function_Description:
	def login
		if(params[:username].empty? || params[:password].empty?)
			redirect_to(root_url)
		else
			userEmail = params[:username];
			userPwd = params[:password];

			loginUser = Users.Authenticate(userEmail, userPwd);

			if(loginUser != nil)
				signIn(loginUser);
				redirect_to('/mobile/user') and return;
			else
				redirect_to('/mobile/register') and return;
			end
		end
	end

	#Function_Name:
	#Function_Description:
	def search
	end

	#Function_Name:
	#Function_Description:
	def map
	end

	#Function_Name:
	#Function_Description:
	def register
	end

	#Function_Name:
	#Function_Description:
	def user
		if(request.get? && cookies[:user] == nil)
			redirect_to root_url and return;
		else
			@loginUser = Users.find_by(userId: cookies[:user]);
		end
	end
end